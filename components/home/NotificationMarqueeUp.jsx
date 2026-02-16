import React from 'react'

const NotificationMarqueeUp = ({ items = [] }) => {
  return (

    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.link_url ? (
            <a href={item.link_url}>
              {item.title}
            </a>
          ) : item.file_name ? (
            <a href={`${process.env.BACKEND_URL}/${item.file_path}`}>
              {item.title}
            </a>
          ) : (
            <a href="#">
              {item.title}
            </a>
          )}
        </li>
      ))}
    </ul>

  )
}

export default NotificationMarqueeUp