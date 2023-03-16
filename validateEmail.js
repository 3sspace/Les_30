
function validateEmail(email){
  if (email === '') return false
  if (typeof email !== 'string') return false
  if (!email.split('').includes('@') || email.split('')[0] === '@') return false
  if (email.length < 5) return false     
  if ((email.split('@').length-1) > 1) return false   
  if (email.lastIndexOf('@') > email.lastIndexOf('.')) return false  
  if (email.includes('.@')) return false    
  return true
}

