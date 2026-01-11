import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export const LoginForm = () => {
  const { backendUrl, saveToken } = useCart();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(backendUrl + "/api/user/login", {
        email,
        password,
      });
      if (data.success) {
        saveToken(data.token);
        toast.success(data.message);
        navigate("/");
        setEmail("");
        setPassword("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Password
        </label>
        <input
          type="password"
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="rounded border-slate-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-slate-600">Remember me</span>
        </label>
        <a
          href="#"
          className="text-sm font-medium text-primary hover:text-primary-dark"
        >
          Forgot password?
        </a>
      </div>
      <button className="w-full btn btn-primary py-3">Sign In</button>
      <p className="text-center text-slate-600 text-sm">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-primary font-medium hover:underline"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};
