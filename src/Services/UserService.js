import React, {Component} from 'react';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'tybaDatabase.db'});

export class UserService extends Component {
  constructor(props) {
    super(props);
  }

  init() {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS users (user_id INTEGER PRIMARY KEY AUTOINCREMENT, username VARCHAR(20), password VARCHAR(255))',
        [],
      );
    });
  }

  store(request) {
    let approved = false;

    if (request.username === '' || request.password === '') {
      return approved;
    }

    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO users (username, password) VALUES (?, ?)',
        [request.username, request.password],
        (tx, results) => {
          approved = results.rowsAffected > 0;
        },
      );
    });

    return approved;
  }

  passwordMatch(request) {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM users where username = ? AND password = ?',
        [request.username, request.password],
        (tx, results) => {
          return results.rows.length > 0;
        },
      );
    });
  }
}
