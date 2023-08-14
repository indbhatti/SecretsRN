export default function Submit() {
  return (
    <div className="container">
      <div className="jumbotron centered">
        <h1 className="display-3">Secrets</h1>
        <p className="secret-text">Don't keep your secrets, share them anonymously!</p>

        <form action="/submit" method="POST">
          <div className="form-group">
            <input type="text" className="form-control text-center" name="secret" placeholder="What's your secret?" />
          </div>
          <button type="submit" className="btn btn-dark my-4">Submit</button>
        </form>

      </div>
    </div>
  );
}
