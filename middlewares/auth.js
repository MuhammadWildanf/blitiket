const isLogin = function (req,res,next){
  console.log(req.session);
  if(!req.session.userId){
      const error = 'Please Login first'
      res.redirect(`/login?error=${error}`)
  }else{
    next()
  }
}

const isAdmin = function (req,res,next){ 
  console.log(req.session);
  if(req.session.userId && req.session.role === 'eventOrganizer'){
    next()
  }else{
      const error = 'You Have No access'
      res.redirect(`/login?error=${error}`)
  }
}

const isUser = function (req,res,next){ 
  console.log(req.session);
  if(req.session.userId && req.session.role === 'user'){
    next()
  }else{
      const error = 'You Have No access'
      res.redirect(`/login?error=${error}`)
  }
}


module.exports = {isLogin, isAdmin, isUser}