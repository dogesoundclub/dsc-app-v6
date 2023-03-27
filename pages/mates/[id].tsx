import { NextPageContext } from "next";

export default function Example(props: { query: any }) {
    return (
        <div>
            <h1>{props.query.id}</h1>
        </div>
    );
}
Example.getInitialProps = ({ query }: NextPageContext) => {
    return { query };
};