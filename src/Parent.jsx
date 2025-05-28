function Child({ sendMessage }) {
  function onClickButton() {
    sendMessage('nè!!!!')
  }
  return (
    <>
      <p>Child</p>
      <button onClick={onClickButton}>Click me!!!</button>
    </>
  )
}

function Parent() {
  function onClickChild(msg) {
    alert('Đây ' + msg)
  }
  return <Child sendMessage={onClickChild} />
}

export default Parent
