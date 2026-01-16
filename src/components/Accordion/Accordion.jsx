import { useReducer } from "react";
import "./style.css";

export const Accordion = ({
  property1,
  className,
  vectorClassName,
  vector = "/img/vector-6.svg",
  headlineIconClassName,
  descriptionClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "version-1",
  });

  return (
    <div
      className={`accordion ${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`headline-icon ${headlineIconClassName}`}>
        <div className="headline">
          {["variant-2", "version-1"].includes(state.property1) && (
            <p className="text-wrapper-19">
              What is ScopeDocs and how does it work?
            </p>
          )}

          {["variant-3", "variant-4"].includes(state.property1) && (
            <p className="text-wrapper-19">
              How do you keep docs accurate and up to date?
            </p>
          )}

          {["variant-5", "variant-6"].includes(state.property1) && (
            <p className="text-wrapper-19">
              How do permissions and privacy work?
            </p>
          )}

          {["variant-7", "variant-8"].includes(state.property1) && (
            <p className="text-wrapper-19">
              Do you train AI models on our company data?
            </p>
          )}

          {["variant-10", "variant-9"].includes(state.property1) && (
            <p className="text-wrapper-19">How quickly can we get started?</p>
          )}

          {["variant-11", "variant-12"].includes(state.property1) && (
            <p className="text-wrapper-19">
              How is this different from a wiki or Notion?
            </p>
          )}
        </div>

        <div
          className="icon-caret-up"
          onClick={() => {
            dispatch("click_1680");
          }}
        >
          <img
            className={`vector-12 ${vectorClassName}`}
            alt="Vector"
            src={
              state.property1 === "version-1"
                ? vector
                : [
                      "variant-11",
                      "variant-3",
                      "variant-5",
                      "variant-7",
                      "variant-9",
                    ].includes(state.property1)
                  ? "/img/vector-7.svg"
                  : "/img/vector.svg"
            }
          />
        </div>
      </div>

      <div className={`description ${descriptionClassName}`}>
        {["variant-2", "version-1"].includes(state.property1) && (
          <p className="text-wrapper-19">
            ScopeDocs turns your Slack, tickets, PRs, and specs into clean,
            structured docs, then keeps them updated as work changes.
          </p>
        )}

        {["variant-3", "variant-4"].includes(state.property1) && (
          <p className="text-wrapper-19">
            We generate from source artifacts (threads, tickets, PRs) and
            include timestamps and citations, so every summary is traceable.
          </p>
        )}

        {["variant-5", "variant-6", "variant-7"].includes(state.property1) && (
          <p className="text-wrapper-19">
            ScopeDocs is permissions-aware, it only shows content a user is
            allowed to access in your connected tools.
          </p>
        )}

        {state.property1 === "variant-8" && (
          <p className="text-wrapper-19">
            No, your workspace data is used to generate outputs for your team,
            not to train a public model.
          </p>
        )}

        {["variant-10", "variant-11", "variant-9"].includes(
          state.property1,
        ) && (
          <p className="text-wrapper-19">
            Most teams connect Slack and generate their first docs in minutes,
            then expand to tickets and code when ready.
          </p>
        )}

        {state.property1 === "variant-12" && (
          <p className="text-wrapper-19">
            Wikis are manual and go stale. ScopeDocs generates docs from real
            work and refreshes them when things change.
          </p>
        )}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "variant-2") {
    switch (action) {
      case "click":
        return {
          property1: "version-1",
        };

      case "click_1680":
        return {
          property1: "version-1",
        };
    }
  }

  if (state.property1 === "variant-4") {
    switch (action) {
      case "click":
        return {
          property1: "variant-3",
        };
    }
  }

  if (state.property1 === "variant-6") {
    switch (action) {
      case "click":
        return {
          property1: "variant-5",
        };
    }
  }

  if (state.property1 === "variant-8") {
    switch (action) {
      case "click":
        return {
          property1: "variant-7",
        };
    }
  }

  if (state.property1 === "variant-10") {
    switch (action) {
      case "click":
        return {
          property1: "variant-9",
        };
    }
  }

  if (state.property1 === "variant-12") {
    switch (action) {
      case "click":
        return {
          property1: "variant-11",
        };
    }
  }

  if (state.property1 === "version-1") {
    switch (action) {
      case "click":
        return {
          property1: "variant-2",
        };

      case "click_1680":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-3") {
    switch (action) {
      case "click":
        return {
          property1: "variant-4",
        };
    }
  }

  if (state.property1 === "variant-5") {
    switch (action) {
      case "click":
        return {
          property1: "variant-6",
        };
    }
  }

  if (state.property1 === "variant-7") {
    switch (action) {
      case "click":
        return {
          property1: "variant-8",
        };
    }
  }

  if (state.property1 === "variant-9") {
    switch (action) {
      case "click":
        return {
          property1: "variant-10",
        };
    }
  }

  if (state.property1 === "variant-11") {
    switch (action) {
      case "click":
        return {
          property1: "variant-12",
        };
    }
  }

  return state;
}
