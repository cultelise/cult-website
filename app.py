from flask import Flask, render_template

app = Flask(__name__)

title = "Blog Post Title"
preview = "Preview Text"


@app.route("/")
def hello_elise():
    return render_template("index.html", title=title, preview=preview)


if __name__ == "__main__":
    app.run(debug=True)
