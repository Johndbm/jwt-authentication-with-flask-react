"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/register', methods=['POST'])
def add_user():
    if request.method == "POST":
        body = request.json
        email = body.get("email", None)
        password = body.get("password", None)
        try:
            if email is None or password is None:
                raise Exception("No ingresaste todos los datos", 400)
            user = User(email=email, password=password)
            db.session.add(user)
            db.session.commit()
            return jsonify("Message" "User Created!")
        except Exception as error:
            return jsonify(error.args[0]), error.args[1]