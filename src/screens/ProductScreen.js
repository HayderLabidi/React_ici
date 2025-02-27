import React from 'react'
import data from '../Data'
import { useParams } from 'react-router-dom';

export default function ProductScreen(props) {
    const {id} = useParams();
    const product = data.products.find((x) => x._id === id);
  return (
    <div>
      
    </div>
  )
}
