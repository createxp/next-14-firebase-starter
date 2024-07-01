"use client";
import { useRouter } from "next/navigation";
import useAuth from "~/context/AuthContext";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user } = useAuth();
  if (!user) router.push("/auth");

  return <>{children}</>;
};

export default PrivateRoute;
