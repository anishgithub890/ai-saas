import { UserButton } from '@clerk/nextjs';

const DashboardPage = () => {
  return (
    <div>
      <p className="text-rose-500">Dashboard Page (protected) </p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashboardPage;
