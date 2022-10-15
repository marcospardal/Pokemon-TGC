import Attack from "./attacks"
import Weakness from "./weakness"

interface Image {
  small: string
  large: string
}

interface Pokemon {
  id: string
  name: string
  supertype: string
  subtypes: string[]
  hp: string
  types: string[]
  evolvesTo: string[]
  rules: string[]
  attacks: Attack[]
  weaknesses: Weakness[]
  retreatCost: string[]
  images: Image
}

export default Pokemon