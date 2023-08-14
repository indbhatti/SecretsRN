import Card from "../Card"
import Form from "../Form"


export default function Login() {
  return (
    <div className="container mt-5">
      <h1>Login</h1>

      <div className="row">
        <div className="col-sm-8">
          <div className="card">
            <Form />
          </div>
        </div>

        <div className="col-sm-4">
          <Card auth="Facebook" href="/auth/facebook" />
          <Card auth="Github" href="/api/auth/signin" />
          <Card auth="Google" href="/auth/google" />
        </div>

      </div>
    </div>

  );
}
