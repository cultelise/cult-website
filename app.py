from flask import Flask, render_template

app = Flask(__name__)

title = "Blog Post Title"


@app.route("/")
def hello_elise():
    return render_template("index.html", title=title)


if __name__ == "__main__":
    app.run(debug=True)
