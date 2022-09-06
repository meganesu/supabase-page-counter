import React from 'react'
import supabase from '../utils/supabase'

const PageViewCounter = ({url}) => {
  const numberOfViews = 0

  return (
    <p>This page has been viewed {numberOfViews} times.</p>
  )
}

export default PageViewCounter