import React,  { useState, useEffect } from 'react';

export default function ResourceCal() {
  const [resourceType, setResourceType] = useState("Posts");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    console.log('rosource type changed')
  }, [resourceType])

  return (
    <>
      <div>
        <button onClick={() => setResourceType('post')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      <h1>{windowWidth}</h1>
    </>
  )
}