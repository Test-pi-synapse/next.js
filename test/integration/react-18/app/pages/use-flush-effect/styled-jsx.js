import React from 'react'
import dynamic from 'next/dynamic'

const Red = dynamic(() => import('../../components/red'), {
  suspense: true,
})

function Blue() {
  return (
    <div>
      <p>This is Blue.</p>
      <style jsx>{`
        p {
          color: blue;
        }
      `}</style>
    </div>
  )
}

export default function StyledJsx() {
  return (
    <>
      <Blue />
      <React.Suspense fallback="Loading...">
        <Red />
      </React.Suspense>
    </>
  )
}
