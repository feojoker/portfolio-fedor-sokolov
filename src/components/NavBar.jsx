import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

export default function NavBar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex items-center">
          <NavLink to="/"
            exact
            activeClassName="text-white"
            className="relative bottom-2 px-3 mr-4 text-red-100 hover:text-yellow-900 text-4xl cursive tracking-widest"
          >
            Fedor Sokolov
          </NavLink>
          <NavLink
            to="/posts"
            className="px-3 rounded text-red-200 hover:text-yellow-800"
            activeClassName="text-red-100 bg-red-700"
          >

            Blog Posts
          </NavLink>
          <NavLink
            to="/projects"
            className="px-3 rounded text-red-200 hover:text-yellow-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="px-3 rounded text-red-200 hover:text-yellow-800"
            activeClassName="text-red-100 bg-red-700"
          >
            About Me
          </NavLink>
        </nav>
        <div className="p-3 my-6">
          <SocialIcon
            url="https://github.com/feojoker"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://t.me/feojoker"
            network="telegram"
            className=""
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  )
}
