document.addEventListener('DOMContentLoaded', ()=>
{
    console.log('hello')
    let form = document.querySelector('#beer-form')
    let appendHere = document.querySelector('#card-append')
    let card
    let shell
    let beer

    axios.get('http://beer-me-python-backend.herokuapp.com/beers').then(function(result) {
        data = result.data
        
        for (let i = 0; i < data.length; i++)
        {
            beer = data[i]
            shell = document.createElement('div')
            shell.classList.add('card')

            shell.innerHTML = `
            <div class="content">
            <img class="right floated mini ui image" src="/images/avatar/large/jenny.jpg">
            <div class="header">
              ${beer.beer_name}
            </div>
            <div class="meta">
              New Member
            </div>
            <div class="description">
              ${beer.description}
            </div>
          </div>
          <div class="extra content">
            <div class="ui two buttons">
              <div class="ui basic green button">Approve</div>
              <div class="ui basic red button">Decline</div>
            </div>
          </div>`
            appendHere.appendChild(shell)
        }

        
    })
})