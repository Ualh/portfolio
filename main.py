from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/energizing-change')
def project1():
    return render_template('energizing_change/report.html')

if __name__ == "__main__":
    app.run(debug=True)