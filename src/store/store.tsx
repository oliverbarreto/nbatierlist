import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { State, Actions } from './StoreInterface'
import { Tier } from '@/interfaces/TierInterface'
import { TierRowTitle } from '@/interfaces/TierRowTitleInterface'
import { allNBATeams } from '@/data/data'


const initialTierRowTitles = (): TierRowTitle[] =>  {
    const tiers: Tier[] = ["Dynasty", "TierA", "TierB", "TierC", "TierD", "TierE", "TierF"];
    
    // Filtrar los elementos que no son "None"
    return tiers.map(tier => {
        return { 
            tier,
            title: tier
        }
    })
  }
const noItemsMoved = (): boolean => { 

    return true
}


export const useTierlistStore = create<State & Actions>()(
    persist(
        set => ({
            items: allNBATeams,
            draggedItem: null,
            tierRowTitles: initialTierRowTitles(),

            dragItem: (id: string | null) => set({ draggedItem: id }),

            updateDraggedItem: (id: string, tier: Tier) =>
                set(state => ({
                items: state.items.map(item =>
                    item.id === id ? { ...item, tier } : item)})
                ),
            
            resetTeamsTier: () => 
                set(state => ({
                    items: state.items.map(item => {
                        return {...item, tier: "None"}
                    })    
                })

                ),
            updateTierRowTitle: (tier: Tier, title: string) => 
                set(state => ({
                    tierRowTitles: state.tierRowTitles.map(row => 
                        (row.tier !== tier) ? row : {...row, title: title }
                    )
                })
                ),
        }),
        { name: 'tierlist-store-oliverbarreto-com', skipHydration: true }
      )
    
)

// export const useTaskStore = create<State & Actions>()(
//   persist(
//     set => ({
//       tasks: [],
//       draggedTask: null,
//       addTask: (title: string, description?: string) =>
//         set(state => ({
//           tasks: [
//             ...state.tasks,
//             { id: uuid(), title, description, status: 'TODO' }
//           ]
//         })),
//       dragTask: (id: string | null) => set({ draggedTask: id }),
//       removeTask: (id: string) =>
//         set(state => ({
//           tasks: state.tasks.filter(task => task.id !== id)
//         })),
//       updateTask: (id: string, status: Status) =>
//         set(state => ({
//           tasks: state.tasks.map(task =>
//             task.id === id ? { ...task, status } : task
//           )
//         }))
//     }),
//     { name: 'task-store', skipHydration: true }
//   )
// )