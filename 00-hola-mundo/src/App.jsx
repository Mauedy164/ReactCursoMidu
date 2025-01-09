import { TwitterFollowCard } from "./TwitterFollowCard";

export function App () {
    return(
      <>
      <TwitterFollowCard userName={"midudev"} name={"Miguel Angel Duran"} isFollowing/>
      <TwitterFollowCard userName={"piojoalva13"} name={"Roberto Alvarado"} isFollowing={false}/>
      </>

    )
}