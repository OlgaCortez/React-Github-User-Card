import React from 'react';

function UserCard(props) {
    return (
        <div className="card">
            <img src={props.users.avatar_url} atl={props.users.name} />
            <h1>{props.users.name}</h1>
            <p>Bio: {props.users.bio}</p>
            <p>Company: {props.users.company}</p>
        <div>
            {props.followers.map(follower =>
                <> 
                <h3 key={follower.id}> Follower: {follower.login} </h3> 
                <img src={follower.avatar_url} alt={follower.login} />
                </>
              )}
         </div>
        </div>
   
    )
}

export default UserCard;