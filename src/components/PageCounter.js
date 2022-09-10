import React, { useState, useEffect } from 'react'
import supabase from '../utils/supabase'

const PageViewCounter = ({url}) => {
  const [numberOfViews, setNumberOfViews] = useState()

  useEffect(() => {
    const getPageViewCount = async () => {
      const response = await supabase
        .from('page_views')
        .select('*', { count: 'exact' })
        .eq('page_url', url)
      console.log(response)
      return response
    }

    const addNewPageView = async () => {
      return await supabase
        .from('page_views')
        .insert([
          {page_url: url}
        ])
    }

    getPageViewCount()
      .then(({ count, error }) => {
        if (error) {
          throw new Error(error)
        }

        console.log({ count, error })

        if (!count) {
          console.log('no matching row for this URL:', url)
          setNumberOfViews(1)
        }
        else {
          setNumberOfViews(count + 1)
        }

        return addNewPageView()
      })
      .then(({error}) => {
        if (error) {
          throw new Error(error)
        }
      })


  }, [url])


  return (
    <p>This page has been viewed {numberOfViews} times.</p>
  )
}

export default PageViewCounter