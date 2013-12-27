import os
from flask import Flask, request, make_response#render_template
import hashlib

application = Flask(__name__)
application.debug = True

@application.route('/')
def index():
	return make_response(open('templates/index.html').read())

"""@application.route('/')
def index():
	m = hashlib.md5()
	m.update(request.remote_addr)
	hashed_ip = m.hexdigest()
	return render_template('index.html', ip_address = request.remote_addr, hashed_ip  = hashed_ip)"""

if __name__ == "__main__":
    application.run(host='0.0.0.0', debug=True)