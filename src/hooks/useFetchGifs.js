import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [images, setimages] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const getImages =  async() => {
        const gifs = await getGifs(category);
        setimages(gifs)
        setisLoading(false)
    }
    useEffect(() => {
        getImages()
    }, [])
  return {
    images,
    isLoading
  }
}
