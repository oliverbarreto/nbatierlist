import { Team } from "@/interfaces/TeamInterface"
import { Tier } from "@/interfaces/TierInterface"
import { TierRowTitle } from "@/interfaces/TierRowTitleInterface"

export interface State {
  items: Team[]
  draggedItem: string | null
  tierRowTitles: TierRowTitle[]
}

export interface Actions {
  dragItem: (id: string | null) => void
  updateDraggedItem: (id: string, tier: Tier) => void
  resetTeamsTier: () => void
  updateTierRowTitle: (tier: Tier, title: string) => void
}
