import * as React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import App from './App';
import renderer, { ReactTestRenderer, ReactTestRendererJSON } from 'react-test-renderer';
import ProjectItem from './Components/ProjectItem';
import weatherAPI from './images/weather-api.jpeg'
import shallow from 'react-test-renderer/shallow'; 

test('renders project item component', () => {

  const component = renderer.create(
    <ProjectItem url="https://thawing-beach-25991.herokuapp.com/" bgImage={`url(${weatherAPI})`} text="Weather API"></ProjectItem>
  ); 
  const result = component.getRenderOutput();
  let tree = component.toJSON();
  let Href = tree.props.url;
  console.log(component.getInstance());
  expect(tree).toMatchSnapshot();
  const wrapper = shallow(component);
  expect(result.type).toBe(`div`)
});

