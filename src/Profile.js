import React from "react"
import { format } from "date-fns"

export default function Profile(props) {
  return (
    <>
      <article className="p-5 bg-white-rounded-lg-shadow shadow-emerald-300 mt-10">

        <img src={props.owner.avatar_url} alt={props.owner.login} className="w-20 h-20 rounded-full shadow"></img>
        <div>
          <h2>{props.owner.login}</h2>
          <p>{props.name}</p>
          {props.private ?<p>Private</p>: <p className="bg-emerald-300 py-1 px-2 text-xs text-white shadow rounded-lg inline-block">Public</p>}

        </div>
        <div>
          <p>Created at  {format(new Date(props.created_at), "dd MMMM yyyy")} by {""}
          {props.owner.login}
          </p>
        </div>
        <div>
          <a href={props.html_url} target="_blank" rel = "noreferrer">View </a>
          <ul>
            <li>{props.starsgazers_count} stars</li>
            <li>{props.watchers_count} watchers</li>
          </ul>
        </div>

        <div>
          <p>{props.languages}</p>

          <ul>
            {props.topics.map((topic, index) => (
              <li key ={index}>{topic}</li>
            ))}
          </ul>
          <p>{props.open_issues}</p>
        </div>
      </article>
    </>
  )
}
