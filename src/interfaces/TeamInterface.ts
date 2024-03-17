import { Tier } from "./TierInterface"

export interface Team {
  id: string
  fullName: string
  name: string
  tier: Tier
}
