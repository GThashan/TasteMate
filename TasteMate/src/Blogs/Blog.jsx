import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <div className='main-b'>
    <h1 className='main-h1'>So, What We Are Making Today ?</h1>
     <div className="card-body">
      <div className="card">
         <img src='https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg'/>
         <h2>Chocalate</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, expedita! Laborum molestias laboriosam cumque quis ad, odio nobis ratione nihil?</p>
         <Link to={'/1'}><button>Read more</button></Link>
      </div>
      <div className="card">
         <img src='https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg'/>
         <h2>Chocalate</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, expedita! Laborum molestias laboriosam cumque quis ad, odio nobis ratione nihil?</p>
         <button>Read more</button>
      </div>
      <div className="card">
         <img src='https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg'/>
         <h2>Chocalate</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, expedita! Laborum molestias laboriosam cumque quis ad, odio nobis ratione nihil?</p>
         <button>Read more</button>
      </div>
      <div className="card">
         <img src='https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg'/>
         <h2>Chocalate</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, expedita! Laborum molestias laboriosam cumque quis ad, odio nobis ratione nihil?</p>
         <button>Read more</button>
      </div>
      <div className="card">
         <img src='https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg'/>
         <h2>Chocalate</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, expedita! Laborum molestias laboriosam cumque quis ad, odio nobis ratione nihil?</p>
         <button>Read more</button>
      </div>
     </div>
    </div>
  )
}
