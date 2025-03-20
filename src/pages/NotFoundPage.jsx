import { Link } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";

const NotFoundPage = () => {
  return (
    <PageLayout>
      <div className="container max-w-4xl mx-auto px-6 py-20">
        <div className="min-h-[50vh] flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-bold text-[var(--accent)] mb-4">404</h1>
          <h2 className="text-3xl font-bold text-[var(--text)] mb-6">
            Page Not Found
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="px-6 py-3 bg-[var(--accent)] text-white rounded-lg hover:opacity-90 transition duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;
