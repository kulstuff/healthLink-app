import 'package:flutter/material.dart';

class Login extends StatefulWidget {
  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> with SingleTickerProviderStateMixin {
  AnimationController _controller;

  final logo = Hero(
    tag: 'hero',
    child: CircleAvatar(),
  );

  final username = TextFormField(
    keyboardType: TextInputType.emailAddress,
    autofocus: false,
    initialValue: 'example@kulstuff.com',
    decoration: InputDecoration(
      hintText: 'Username',
      contentPadding: EdgeInsets.fromLTRB(20.0, 10.0, 20.0, 10.0),
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(32.0)
      )
    ),
  );

  final password = TextFormField(
    autofocus: false,
    initialValue: 'Secret',
    obscureText: true,
    decoration: InputDecoration(
        hintText: 'Password',
        contentPadding: EdgeInsets.fromLTRB(20.0, 10.0, 20.0, 10.0),
        border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(32.0)
        )
    ),
  );

  final loginSubmit = Padding(
    padding: EdgeInsets.symmetric(vertical: 16.0),
    child: Material(
      borderRadius: BorderRadius.circular(30.0),
      shadowColor: Colors.lightBlueAccent.shade100,
      elevation: 5.0,
      child: MaterialButton(
        minWidth: 200,
        height: 32,
        onPressed: () {

        },
        color: Colors.pinkAccent.shade100,
        child: Text('LogIn', style: TextStyle(color: Colors.white),),
      ),
    ),
  );

  final forgotLabel = FlatButton(
    child: Text(
      'Forgot Password?',
      style: TextStyle(color: Colors.pinkAccent),
    ),
    onPressed: () {

    },
  );

  @override
  void initState() {
    _controller = AnimationController(vsync: this);
    super.initState();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Center(
        child: ListView(
          shrinkWrap: true,
          padding: EdgeInsets.symmetric(horizontal: 24.0),
          children: <Widget>[
            logo,
            SizedBox(height: 48.0),
            username,
            SizedBox(height: 8.0),
            password,
            SizedBox(height: 24.0),
            loginSubmit, forgotLabel
          ],
        ),
      ),
    );
  }
}
