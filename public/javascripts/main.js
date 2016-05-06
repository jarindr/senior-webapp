export function inintializeMain() {

  setInterval( ()=> {
    $('#chula-age').text(getCurrentAge().toFixed(9))
  }, 50)
}

function getCurrentAge() {

  const born = new Date('5/26/1917')
  const now = new Date()

  return (now-born)/(1000 * 3600 * 24*365)

}
