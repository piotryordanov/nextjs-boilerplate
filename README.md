# About
This is an opiniated frontend boilerplate built on top of nextJS. The key stack elements added are:
- [ Redux ](https://redux.js.org/)
- [Redux-Act](https://github.com/pauldijou/redux-act)
- [Styled-components](https://www.styled-components.com/)
- [ Rebass ](https://rebassjs.org/)

# Structure
- All `redux` reducers are under the `data` directory
- `./containers` contains all containers. They are responsible to fetch, update, and pass down the redux state down to components.
- `./components` contains all components. They are to **never** deal directly with the state other than via props.

----

# Linting
This project provides linting using [xo](https://github.com/xojs/xo) to lint, and a mix of [Prettier](https://prettier.io/) with xo for fixing. You might need to install them both on your system:

```
npm install -g xo
pacman -S prettier
```

## Vim setup
You can use [Ale](https://github.com/w0rp/ale) to have both linting and fixing in vim/neovim. It will be based on xo and Prettier.
Add the following to your vimrc:

```
" Auto Formatting
Plug 'Chiel92/vim-autoformat'
Plug 'xojs/vim-xo'

" Javascript
Plug 'pangloss/vim-javascript'
Plug 'mxw/vim-jsx'

" Linting
Plug 'w0rp/ale'
Plug 'prettier/vim-prettier', {
  \ 'do': 'yarn install',
  \ 'branch': 'release/1.x',
  \ 'for': [
    \ 'javascript',
    \ 'css',
    \ 'json',
    \ 'graphql',
    \ 'markdown',
    \ 'python',
    \ 'html',
    \ 'swift' ] }
```

Then somewhere else, add these settings to enable the linting/fixing:

```
let b:ale_fixers = {'javascript': ['xo'], "json": ['prettier']}
let b:ale_linters = {'javascript': ['xo']}
let g:ale_linters_explicit = 1
let g:ale_fix_on_save = 1
```

----

# Docker
You can run this application inside docker. Simply run:
`sudo docker-compose down; sudo docker-compose up --build`

# Deploy
In order to deploy the app, type in: `now`

----

# Todo
- Add automatic deployment to server using `pm2`.


Potential inspiration: https://github.com/react-boilerplate/react-boilerplate/blob/master/README.md
