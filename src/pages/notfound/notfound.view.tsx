import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const NotFound: FunctionComponent = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="px-40 sm:px-10 py-20 dark:bg-root-card-dark bg-root-card-light rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-9xl">404</h1>
          <h6 className="mb-2 text-2xl font-bold text-center md:text-3xl">
            <span className="text-red-500">Упс!</span> Страница не найдена
          </h6>
          <p className="mb-8 text-center text-gray-500 md:text-lg">
              Страницы, которую вы искали не существует.
          </p>
          <Link to="/" className="px-6 py-2 text-md font-semibold rounded bg-root-violet-default border-none hover:bg-root-violet-hover transition">Go home</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
