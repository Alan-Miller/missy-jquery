$(document).ready(function() {
  
  let box = $('box')
  
  box.on('click', function() {
    $(this).toggleClass('toggle')
    
  })
  
  let expandedPTag = $('expand p')
  expandedPTag.hide()
  
  let expand = $('expand')
  expand.on('click', function() {
    if(expandedPTag.is(":visible")) {
      expand.height(expand.height() / 2)
      expandedPTag.hide(500)
    } else {
      expand.height(expand.height() * 2)
      expandedPTag.show(500)
    }
  })
  
  $('#hide').on('click', function() {
    $('red:first').hide(200, function hideMe() {
      $(this).next('red').hide(200, hideMe)
    })
  })
  
  $('#show').on('click', function() {
    $('red:first').show(200, function showMe() {
      $(this).next('red').show(200, showMe)
    })
  })
 
 
  $('#postme').prop('disabled', true)
  
  $('#input').keyup(function(){
    $('#text').text($('#input').val())
    $('#postme').prop('disabled', false)
  })
  

  $('#button').on('click', function() {
    let num = $('#number')
    if(num.text() > 1) {
      num.text(num.text() - 1)
    } else {
      num.text(num.text() - 1)
      $('#button').prop('disabled', true)
    }
  })
  
  let profileData = [{name: 'Lloyd', description: 'rad'},
    {name: 'Dally', description: 'happy'},
    {name: 'Shelly', description: 'cowgirly'},
    {name: 'patrick', description: 'fishy'}]
    
    // Bubbling -- event.stopPropagation, preventDefault, return false
    // $('.stream').on('click', function() {
    //   alert('hey')
    // })
    // Event handlers and performance --- jQuery docs: http://api.jquery.com/on/
    
    let profiles = arr => {
      arr.map((e, i) => {
        if(i === 0) {
          let el = $('.profileCard')
          el.find('.name').text(e.name)
          el.find('.description').text(e.description).hide()
          el.hover(function() {
            $(this).find('.description').show(200)
          }, function() {
            $(this).find('.description').hide(200)
          })
          el.on('click', function() {
            $(this).hide(200)
            return false;
          })
          $('.stream').append(el)
        } else {
          let el = $('.profileCard:first').clone(true)
          el.find('.name').text(e.name)
          el.find('.description').text(e.description).hide()
          $('.stream').append(el)
        }
      })
    }
    
    profiles(profileData)
    
  $('#postme').on('click', function() {
    let el = $('.profileCard:first').clone(true)
    el.find('.name').text($('#input2').val())
    el.find('.description').text($('#input').val()).hide()
    $('.stream').prepend(el)
    $('#input, #input2').val('')
    $('#text').text('')
    $('#postme').prop('disabled', true)
  })
  
  
  
  
})