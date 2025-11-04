import Link from "next/link";

// Page not found error ui:
// 1) Route not defined
// 2) Id in route params doesn't exist  ==> _lib/data-service.js

function NotFound() {
  return (
    <main className='text-center space-y-6 mt-4'>
      <h1 className='text-3xl font-semibold'>
        This cabin could not be found :(
      </h1>
      <Link
        href='/'
        className='inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg'
      >
        Back to all cabins page
      </Link>
    </main>
  );
}

export default NotFound;
