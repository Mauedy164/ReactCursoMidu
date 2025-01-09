import { useState } from "react";


export function TwitterFollowCard ({ children, userName }) {
  const [isFollowing, setIsFollowing] = useState(false)

  
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const estiloBoton= isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
    return(
        <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img className="tw-followCard-avatar" src={`https://unavatar.io/x/@${userName}`} alt="@olivduardo" />
          <div className="tw-followCard-info">
            <strong className="">{children}</strong>
            <span className="tw-followCard-infoUserName">@{userName}</span>
          </div>
        </header>
        <aside>
          <button className={estiloBoton} onClick={handleClick}>
            {text}
          </button>
        </aside>
      </article>
    );
}