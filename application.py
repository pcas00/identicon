import os
from flask import Flask, request, render_template
import hashlib

app = Flask(__name__)

@app.route('/')
def index():
	m = hashlib.md5()
	m.update(request.remote_addr)
	hashed_ip = m.hexdigest()
	return render_template('index.html', ip_address = request.remote_addr, hashed_ip  = hashed_ip)

if __name__ == "__main__":
    app.run()