import React, { Component } from "react"
import { ThemeToggler as PluginThemeToggler } from "gatsby-plugin-dark-mode"

export class ThemeToggler extends Component {
  render() {
    return (
      <PluginThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "darlReact"}
            />{" "}
            Dark mode
          </label>
        )}
      </PluginThemeToggler>
    )
  }
}
