export type DisplayType =
	| "block"
	| "inline"
	| "inlineBlock"
	| "flex"
	| "inlineFlex"
	| "grid"
	| "table";

export type Alignment =
	| "start"
	| "end"
	| "flexStart"
	| "flexEnd"
	| "center"
	| "left"
	| "right"
	| "spaceBetween"
	| "spaceAround"
	| "spaceEvenly";

export interface Styles {
	display: DisplayType;
	justifyContent: Alignment;
	marginLeft: string;
	marginTop: string;
	marginRight: string;
	marginBottom: string;
	ml: string;
	mt: string;
	mr: string;
	mb: string;
}
