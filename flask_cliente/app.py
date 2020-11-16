from flask import Flask
import requests

app = Flask(__name__)

@app.route('/')
def hello():
    return 'ciao'

@app.route('/faiOrdine')
def fai_ordine():
    res = requests.get('http://localhost:1002').content 
    print(res)
    return res
