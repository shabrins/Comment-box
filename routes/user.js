var fs=require('fs');
var peoplesInfo=JSON.parse(fs.readFileSync('PeopleInfo.txt','utf-8'));
var credentialsMatch=function(email,password){
    return peoplesInfo.some(function(obj){
        return(obj.emailid == email && obj.pswd == password )
    })
}


exports.login = function(req, res){
	res.render('login',{message:req.query.message});
}

exports.profile = function(req, res){
	res.render('Profile');
}

exports.authenticate = function(req, res){
	var email=req.body.email;
	var password=req.body.password;
	if(credentialsMatch(email,password))
		res.redirect('/Profile');
	else
		res.redirect('/login?message="Message+Failed"')
}
