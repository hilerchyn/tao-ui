
h(
  'form', 
  {
    class: 'login-form',
    action: 'login'
  },
  [
    h('input', {type: 'text', name: 'user'}),
    h('input', {type: 'password', name: 'user'}),
    h('button', {on: {click: login}}, ['Log in'])
  ]
)
