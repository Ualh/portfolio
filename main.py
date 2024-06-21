from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, template_folder='docs')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/energizing-change')
def project1():
    return render_template('energizing_change.html')

@app.route('/get_pdf/<filename>', methods=['GET'])
def get_pdf(filename):
    directory = os.path.join(app.root_path, 'pdf_files')
    return send_from_directory(directory, filename)

if __name__ == "__main__":
    app.run(debug=True)