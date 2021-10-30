export type DisplayType =
  | "block"
  | "inline"
  | "inlineBlock"
  | "flex"
  | "inlineFlex"
  | "grid"
  | "table";

export type ExpandTargets = "relative" | "viewport";
export type Expandable = "none" | "both" | "height" | "width";

export interface ExpandOptions {
	target: ExpandTargets,
	value: Expandable
}

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
  alignContent: string;
  alignItems: string;
  alignSelf: string;
  animation: string;
  animationDelay: string;
  animationDirection: string;
  animationDuration: string;
  animationFillMode: string;
  animationIterationCount: "number" | "infinite" | "initial" | "inherit";
  animationName: "none" | "keyframename" | "initial" | "inherit";
  /**
   * No description.
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | 43.0		| 79.0	| 16.0		| 9.0		| 30.0	|
   */
  animationTimingFunction: string;
  /**
   * No description.
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | 43.0		| 10.0	| 16.0		| 9.0		| 30.0	|
   */
  animationPlayState: string;
  /**
   * No description.
   *
   * - background
   * 	- background-color
   * 	- background-image
   * 	- background-repeat
   * 	- background-attachment
   * 	- background-position
   * 	- background-size
   * 	- background-origin
   * 	- background-clip
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | 1.0		| 4.0	| 1.0		| 1.0		| 3.5	|
   */
  background: string;
  /**
   * No description.
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | 1.0		| 4.0	| 1.0		| 1.0		| 3.5	|
   */
  backgroundAttachment: string;
  /**
   * No description.
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | 1.0		| 4.0	| 1.0		| 1.0		| 3.5	|
   */
  backgroundColor: string;
  /**
   * No description.
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | 1.0		| 4.0	| 1.0		| 1.0		| 3.5	|
   */
  backgroundImage: string;
  /**
   * No description.
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | 1.0		| 4.0	| 1.0		| 1.0		| 3.5	|
   */
  backgroundPosition: string;
  /**
   * No description.
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | 1.0		| 4.0	| 1.0		| 1.0		| 3.5	|
   */
  backgroundRepeat: string;
  /**
   * No description.
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | 4.0		| 9.0	| 4.0		| 3.0		| 10.5	|
   */
  backgroundClip: string;
  /**
   * No description.
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | 4.0		| 9.0	| 4.0		| 3.0		| 10.5	|
   */
  backgroundOrigin: string;
  /**
   * No description.
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | 4.0		| 9.0	| 4.0		| 4.1		| 10.5	|
   */
  backgroundSize: string;
  /**
   * No description.
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | 36.0		| 10.0	| 16.0		| 9.0		| 23.0	|
   */
  backfaceVisibility: string;
  /**
   * No description.
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | 1.0		| 4.0	| 1.0		| 1.0		| 3.5	|
   */
  border: string;
  /**
   * No description.
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | 1.0		| 4.0	| 1.0		| 1.0		| 3.5	|
   */
  borderBottom: string;
  /**
   * No description.
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | 1.0		| 4.0	| 1.0		| 1.0		| 3.5	|
   */
  borderBottomColor: string;
  /**
   * No description.
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | 5.0		| 9.0	| 4.0		| 5.0		| 10.5	|
   */
  borderBottomLeftRadius: string;
  /**
   * No description.
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | 5.0		| 9.0	| 4.0		| 5.0		| 10.5	|
   */
  borderBottomRightRadius: string;
  /**
   * No description.
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | 1.0		| 5.5	| 1.0		| 1.0		| 9.2	|
   */
  borderBottomStyle: string;
  /**
   * No description.
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | 1.0		| 4.0	| 1.0		| 1.0		| 3.5	|
   */
  borderBottomWidth: string;
  /**
   * No description.
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | 1.0		| 5.0	| 1.0		| 1.2		| 4.0	|
   */
  borderCollapse: string;
  /**
   * No description.
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | 1.0		| 4.0	| 1.0		| 1.0		| 3.5	|
   */
  borderColor: string;
  /**
   * No description.
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | 16.0		| 11.0	| 15.0		| 6.0		| 15.0	|
   */
  borderImage: string;
  /**
   * No description.
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | Yes		| 11.0	| Yes		| 6.0		| 15.0	|
   */
  borderImageOutset: string;
  /**
   * No description.
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | Yes		| 11.0	| Yes		| 6.0		| 15.0	|
   */
  borderImageRepeat: string;
  /**
   * No description.
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | Yes		| 11.0	| Yes		| 6.0		| 15.0	|
   */
  borderImageSlice: string;
  /**
   * No description.
   *
   * | Chrome 	| Edge	| Firefox	| Safari	| Opera	|
   * | -------- | ----- | ---------	| ---------	| -----	|
   * | Yes		| 11.0	| Yes		| 6.0		| 15.0	|
   */
  borderImageSource: string;
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
  width: string;
  height: string;
  expand: ExpandOptions;
}
