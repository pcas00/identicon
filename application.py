import os
from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', ip_address = request.remote_addr)

if __name__ == "__main__":
    app.run()