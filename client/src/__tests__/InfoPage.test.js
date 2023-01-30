import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import InfoPage from '../routes/InfoPage';

const dummyData = { name: "Snowshoe", id: "snow", origin: "United States", life_span: "14 - 19" };

describe('renders <InfoPage /> with input catid="snow"', () => {
  it('load name of cat on InfoPage', async () => {
    render(
      <MemoryRouter initialEntries={[{pathname: '/breeds/snow'}, {state: dummyData}]}>
          <InfoPage />
      </MemoryRouter>
    );
    const title = screen.getByTestId('name')
    expect(title).toHaveTextContent('Snowshoe');
  });
  it("load origin of cat on InfoPage", async () => {
    render(
      <MemoryRouter initialEntries={[{pathname: '/breeds/snow'}, {state: dummyData}]}>
          <InfoPage />
      </MemoryRouter>
    );
    const title = screen.getByTestId('origin')
    expect(title).toHaveTextContent('United States');
  });
  it("load life span of cat on InfoPage", async () => {
    render(
      <MemoryRouter initialEntries={[{pathname: '/breeds/snow'}, {state: dummyData}]}>
          <InfoPage />
      </MemoryRouter>
    );
    const title = screen.getByTestId('life_span')
    expect(title).toHaveTextContent('14 - 19');
  });
});
