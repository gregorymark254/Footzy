import React from 'react'
import {Link} from 'react-router-dom'
// import { FaSearch } from "react-icons/fa";

const Category = () => {
  return (
    <main>
      <div className="container mx-auto text-center p-4">
        <h1>Product Category</h1>
        <p>FOOTZY / Product category</p>
      </div>

      <div className="bg-[#f1ebf5]">
        <div className="container mx-auto p-6">
          <div className="md:flex gap-6">
            <div className="p-4">
              <form>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="grey" stroke-width="2" stroke-linecap="round" 
              stroke-linejoin="round" class="search-icon cursor-pointer"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> */}
                <input 
                  type="text"
                  required
                  placeholder=" Search.."
                  className="py-2 px-4 w-full"
                />
              </form>
              <br />

              <div className="bg-white p-5">
                <h3><u>Meta</u></h3>
                <p>Login</p>
                <p>Login</p>
                <p>Login</p>
              </div>
            </div>

            <div className="p-4 text-center">
              <div className="grid md:grid-cols-4 gap-2">
                <Link to="/adidas">
                  <span ><img className="border border-neutral-700 hover:-translate-y-2 duration-300" src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/product-category.jpg" alt="" /></span>
                  <p className="p-4 text-center">Adidas</p>
                </Link>
                <Link to="/nike">
                  <span ><img className="border border-neutral-700 hover:-translate-y-2 duration-300" src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/product-category.jpg" alt="" /></span>
                  <p className="p-4 text-center">Nike</p>
                </Link>
                <Link to="/balenciaga">
                  <span ><img className="border border-neutral-700 hover:-translate-y-2 duration-300" src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/product-category.jpg" alt="" /></span>
                  <p className="p-4 text-center">Balenciaga</p>
                </Link>
                <Link to="/vans">
                  <span ><img className="border border-neutral-700 hover:-translate-y-2 duration-300" src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/product-category.jpg" alt="" /></span>
                  <p className="p-4 text-center">Vans</p>
                </Link>
                <Link to="/skechers">
                  <span ><img className="border border-neutral-700 hover:-translate-y-2 duration-300" src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/product-category.jpg" alt="" /></span>
                  <p className="p-4 text-center">Skechers</p>
                </Link>
                
                <Link to="/puma">
                  <span ><img className="border border-neutral-700 hover:-translate-y-2 duration-300" src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/product-category.jpg" alt="" /></span>
                  <p className="p-4 text-center">Puma</p>
                </Link>
                <Link to="/reebok">
                  <span ><img className="border border-neutral-700 hover:-translate-y-2 duration-300" src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/product-category.jpg" alt="" /></span>
                  <p className="p-4 text-center">Reebok</p>
                </Link>
                <Link to="/new-balance">
                  <span ><img className="border border-neutral-700 hover:-translate-y-2 duration-300" src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/product-category.jpg" alt="" /></span>
                  <p className="p-4 text-center">New Balance</p>
                </Link>
                <Link to="/crocs-slides">
                  <span ><img className="border border-neutral-700 hover:-translate-y-2 duration-300" src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/product-category.jpg" alt="" /></span>
                  <p className="p-4 text-center">Crocs & Slides</p>
                </Link>
                <Link to="/converse">
                  <span ><img className="border border-neutral-700 hover:-translate-y-2 duration-300" src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/product-category.jpg" alt="" /></span>
                  <p className="p-4 text-center">Converse</p>
                </Link>
                <Link to="/jordans">
                  <span ><img className="border border-neutral-700 hover:-translate-y-2 duration-300" src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/product-category.jpg" alt="" /></span>
                  <p className="p-4 text-center">Jordans</p>
                </Link>
                <Link to="/boots"> 
                  <span ><img className="border border-neutral-700 hover:-translate-y-2 duration-300" src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/product-category.jpg" alt="" /></span>
                  <p className="p-4 text-center">Boots</p>
                </Link>
              </div>
            </div>
            {/* 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 */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Category
