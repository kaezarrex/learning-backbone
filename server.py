from flask import Flask, request, jsonify
import requests


app = Flask(__name__)

@app.route('/')
def hello_world():
    url = request.args.get('url')

    if url is not None:
        try:
            res = requests.get(url).json
        except:
            return '', 500
    else:
        res = dict()

    try: 
        return jsonify(res)
    except:
        return '', 500

if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0', port=5000)
